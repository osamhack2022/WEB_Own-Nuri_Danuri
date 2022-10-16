import * as React from 'react';
import profile from '../../images/profile-tmp.png';

const Profile: React.FC = () => {
    return (
        <div className='flex flex-col text-center'>
            <div id='ProfileFrame' className='rounded-full bg-white mb-4'>
                <img src={profile} alt='profile image' />
            </div>
            <p>병장 송경호</p>
        </div>
    );
}

export default Profile;