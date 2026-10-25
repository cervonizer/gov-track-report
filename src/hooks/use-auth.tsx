import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useQueryClient } from '@tanstack/react-query';

const Context = createContext<{ user: User | null; reviewer: boolean; loading: boolean }>({user: null, reviewer: false, loading: true});
export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({user: null as User | null, reviewer: false, loading: true});
  const qc = useQueryClient();
  useEffect(() => {
    let active = true;
    let epoch = 0;
    async function refresh(user: User | null) {
      const ticket = ++epoch;
      setState({user, reviewer: false, loading: true});
      await qc.cancelQueries({queryKey: ['promises']});
      qc.removeQueries({queryKey: ['promises']});
      const role = user ? await supabase.rpc('is_promise_reviewer').then(r=>r,()=>null) : null;
      if (active && ticket === epoch) setState({user, reviewer: role?.data === true, loading: false});
    }
    const {data: {subscription}} = supabase.auth.onAuthStateChange((_event, session) => {
      // No Supabase calls inside this callback: it may hold the auth lock.
      epoch++;
      setState({user: session?.user ?? null, reviewer: false, loading: true});
      setTimeout(() => {if (active) void refresh(session?.user ?? null);}, 0);
    });
    const initialEpoch = epoch;
    void supabase.auth.getUser().then(({data}) => {if (active && epoch === initialEpoch) void refresh(data.user);}, () => {if(active && epoch === initialEpoch) void refresh(null);});
    return () => {active = false; epoch++; subscription.unsubscribe();};
  }, [qc]);
  return <Context.Provider value={state}>{children}</Context.Provider>;
}
export const useAuth = () => useContext(Context);
