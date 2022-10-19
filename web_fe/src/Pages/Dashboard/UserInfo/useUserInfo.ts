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
    userSet : User[];
}

function useUserInfo(url : string) : UserInfoReturn {
    const SERVER_URL = url;
    const [userSet, setUserSet] = React.useState<User[]>([new User('', '', '', '', '', '')]);

    const fetchData = async () => {
        const response = await axios.get(SERVER_URL);
        console.log("Data Fetched!");
        setUserSet(response.data);
    }

    React.useEffect(() => {
        fetchData();
    }, [SERVER_URL])

    return { userSet };
}

export default useUserInfo;

    // const onSubmitHandler= (e : React.FormEvent<HTMLFormElement>)=>{
    //     e.preventDefault();
        
    //     const i1 = e.currentTarget.elements[0];
    //     const i2 = e.currentTarget.elements[1];
    //     const i3 = e.currentTarget.elements[2];
    //     const i4 = e.currentTarget.elements[3];
    //     const i5 = e.currentTarget.elements[4];
    //     const i6 = e.currentTarget.elements[5];

    //     axios.post(SERVER_URL, {i1,i2,i3,i4,i5,i6});
    //     fetchData();
    // }