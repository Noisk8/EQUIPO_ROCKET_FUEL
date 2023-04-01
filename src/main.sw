contract;

abi OracleContract {
    #[storage(write)]
    fn set_defi(index:u8,value:u64) -> bool;

    #[storage(read)]
    fn get_defi(index:u8) ->  u64;
}

storage {
    DEFITVL: StorageMap<u8, u64> =StorageMap {},
}

impl OracleContract for Contract {
    #[storage(write)]
    fn set_defi(index:u8,value:u64) -> bool {
       storage.DEFITVL.insert (index, value);
       return true;
    }

    #[storage(read)]
    fn get_defi(index:u8) -> u64 {
        let value1 = storage.DEFITVL.get(index).unwrap_or(0);
        return value1;
    }
}

