import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useAuth from '../providers/auth/context';

const ListCreateAccount = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const { reqHeader } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://staffattendanceipe4.herokuapp.com/auth/api/v1/nip', {
          headers: reqHeader,
        });
        setUsers(res.data.message);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  return (
    <div className='nip-list'>
      <div className='card'>
        <div className='title'> List NIP Staff</div>{' '}
        {loading ? (
          <div>Loading...</div>
        ) : (
          users.map(user => (
            <div className='nip-list-item'>
              {user.nip}
              <Link to={`/account/create/${user.nip}`}>
                <div className='button'>Create</div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListCreateAccount;
