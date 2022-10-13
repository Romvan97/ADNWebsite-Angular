export interface LoginForm{
    subscribeEmail: string,
    subscribePassword: string,
    subscribePasswordConfirm: string,
    subscribefirstName: string,
    subscribelastName: string,
    subscribebirthDate: string,
    subscribeGender: 'homme' | 'femme',
    subscribeRememberMe: boolean,
}