const { useSupabase } = require('../supabase');


function useApi() {
    const { supabase } = useSupabase();

    

    const list = async (table) => {
        console.log('je vais appeler')
      
        const { data, error } = await supabase.from(table).select("*");
        if (error) throw error;

        console.log('là j\' appele ', data)
        return data;
      };

        
    return {
        list
    }
}

module.exports = useApi;
