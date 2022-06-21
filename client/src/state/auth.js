
import create from 'zustand';

export const authStore = create(set => ({
  user: 
 
        try {
            const {data} = await api.signIn(formData);
            dispatch({type:AUTH, data});
            router('/roomManagement')
            console.log('signin complete');
        } catch (error) {
            console.log(error);
            alert(error,'Incorrect Password or make sure that your account is register. if not register below');
        }


}));

