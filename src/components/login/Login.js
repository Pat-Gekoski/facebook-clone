import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth, provider} from '../../firebase';
import { useStateValue } from '../../context/StateProvider';
import {actionTypes} from '../../context/reducer';

function Login() {
   const [{}, dispatch] = useStateValue();

   const singIn = () => {
      auth.signInWithPopup(provider)
      .then(result => {
         dispatch ({
            type: actionTypes.SET_USER,
            user: result.user,
         })
      }).catch(error => alert(error.message));
   };

	return (
		<div className='login'>

			<div className='login__logo'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png'
					alt=''
				/>
				<img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt='' />
			</div>

         <Button type="submit" onClick={singIn}>
            Sing In
         </Button>

		</div>
	);
}

export default Login;
