import type {NextPage} from 'next';
import { Component } from 'react';

export const Login : NextPage = () =>{

    return (
        <div>
            <img />
            <div className="form">
                <div>
                    <img /> 
                    <input type="text" placeholder="Login" />
                </div>
                <div>
                    <img /> 
                    <input type="password" placeholder="Senha" />
                </div>
                <button type='button'>Login</button>
            </div>
        </div>
    );
}