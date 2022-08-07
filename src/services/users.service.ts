import axios from 'axios';
import User, { Address } from '../types/user.type';

// Users' API URL
export const API_URL = 'https://dummyjson.com/';

// We'll be using this axios instance across the whole application for fetching the users' API.
export const axiosInstance = axios.create({ baseURL: API_URL });


export type GetUsersResponse = {
    users: User[];
};

export const getAllUsers = async (): Promise<User[]> => {
    return (await axiosInstance.get<GetUsersResponse>('users')).data.users;
}

export const getFullName = (user: User): string => `${user.firstName} ${user.lastName}`;

export const addressToString = (address: Address): string => `${address.address}, ${address.city}, ${address.state}`;
