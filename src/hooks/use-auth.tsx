import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
import type {User} from '@supabase/supabase-js';
import {supabase} from '@/integrations/supabase/client';
import {useQueryClient} from '@tanstack/react-query';
const Context=createContext<{user:User|null;reviewer:boolean;loading:boolean}>({user:null,reviewer:false,loading:true});
export function AuthProvider({children}:{children:ReactNode}){const [user,setUser]=useState<User|null>(null);const [reviewer,setReviewer]=useState(false);const [loading,setLoading]=useState(true);const qc=useQueryClient();
useEffect(()=>{let active=true;let epoch=0;const refresh=async()=>{const ticket=++epoch;const {data}=await supabase.auth.getUser();const role=data.user?await supabase.rpc('is_promise_reviewer'):null;if(active&&ticket===epoch){setUser(data.user);setReviewer(role?.data===true);setLoading(false);qc.invalidateQueries({queryKey:['promises']});}};const {data:{subscription}}=supabase.auth.onAuthStateChange(()=>{setTimeout(refresh,0);});refresh();return()=>{active=false;subscription.unsubscribe();};},[qc]);return <Context.Provider value={{user,reviewer,loading}}>{children}</Context.Provider>;}
export const useAuth=()=>useContext(Context);
