import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { emptyCatalog, type Catalog } from '@/lib/promises';
export function usePromises(){return useQuery({queryKey:['promises'],queryFn:async()=>{const {data,error}=await supabase.rpc('promise_catalog');if(error)throw error;return data as unknown as Catalog;},refetchInterval:30000});}
export {emptyCatalog};
