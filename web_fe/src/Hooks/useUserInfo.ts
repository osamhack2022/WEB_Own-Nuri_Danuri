import * as React from 'react';
import axios from 'axios';

export class User {
    id: string;
    name: string;
    armyunit: string;
    pw: string;
    nickname: string;
    armyclass: string;

    constructor(id: string, name: string, armyunit: string, pw: string, nickname: string, armyclass: string) {
        this.id = id;
        this.name = name;
        this.armyunit = armyunit;
        this.pw = pw;
        this.nickname = nickname;
        this.armyclass = armyclass;
    }
};

interface UserInfoReturn {
    userset: User[];
    loading : boolean;
    error : any;
}

function useUserInfo(url: string): UserInfoReturn {
    const SERVER_URL = url;

    const [userset, setUserSet] = React.useState<User[]>([new User('','','','','','')]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const fetchData = async () => {
        try {
            // 요청 시작 전 
            setUserSet([new User('','','','','','')]);  
            setError(null);
            setLoading(true);

            const response = await axios.get(SERVER_URL);
            setUserSet(response.data);
        }
        catch (e: any) { // any??
            setError(e);
        }
        setLoading(false);
    }

    React.useEffect(() => {
        fetchData();
    }, [])

    return { userset, loading, error };
}

export default useUserInfo;