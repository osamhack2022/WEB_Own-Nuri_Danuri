import * as React from 'react'
import './UserInfoStyle.css'
import profile_tmp from '../../../images/profile-tmp.png'
import { HiOutlinePencilSquare } from 'react-icons/hi2';

const Userinfo: React.FC = () => {
    return (
        <div id='UserInfoContainer' className='flex justify-around items-center w-full h-full bg-white'>
            <div id='UserContent' className='flex justify-around items-center w-full h-5/6'>

                <div id='UserInfos' className='flex justify-around items-center w-3/5 h-full'>

                    <div id='UserFixInfo' className='flex flex-col h-2/3 justify-around'>

                        <input id='milID' type='text' value='21-76028034' />
                        <input id='name' type='text' value='송경호' />
                        <input id='armyunit' type='text' value='1군단 101정보통신단 운용대대' />

                    </div>

                    <div id='UserModifyInfo' className='flex flex-col h-2/3 justify-around'>

                        <input id='pw' placeholder='비밀번호' type='password' />
                        <input id='nickname' placeholder='별명' type='text' />
                        <select id='class'>
                            <option>병장</option>
                            <option>상병</option>
                            <option>일병</option>
                            <option>이등병</option>
                        </select>

                    </div>

                </div>

                <div id='UserProfile' className=''>

                    <div id="UserImage" className='relative w-52 h-52 rounded-full bg-white'>
                        <button id='modifybutton' className='absolute'>
                            <HiOutlinePencilSquare className='w-8 h-8 p-1 rounded-full bg-orange-500 text-white' />
                        </button>
                        <img src={profile_tmp} alt="profile_tmp" className='border-2 border-gray-100 rounded-full'/>
                    </div>

                    <button className='block mx-auto mt-4 px-16 py-1 rounded-full bg-orange-500 text-center text-white'>수정</button>

                </div>
            </div>
        </div>
    )
}

export default Userinfo;


/*
npm install cors / app.use(cors())
npm install axios (typescript는 다를라나?)

import axios from 'axios';

    const [dataset, setDataSet] = useState(null);
    const serverURL = 'http://localhost:4000/api/todo';

    const fetchData = async (){
        const response = await axios.get(serverURL);
        setDataSet(response.data);

        // fetch(serverURL).then((res)=>res.json()).then((data) => setDataSet(dataset));
    }

    useEffect(()=>{
        fetchData();
    }, [])

    const onSubmitHandler = (e) {
        e.preventDefault();
        
        const val = e.target.text.value;
        
        axios.post(serverURL, {val});
        fetchData();
        
        // fetch(serverURL, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type' : 'application/json',
        //     },
        //     body: JSON.stringify({
        //         val,
        //     }),
        // }).then(()=>fetchData()); 
    }

    <form>
        <input name='text/>
        <input type='submit'/>
    </form>

    dataset?.map((data)=>(
        <div key>
            {data.value}
        </div>
    ))
*/