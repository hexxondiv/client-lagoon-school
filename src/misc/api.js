import axios from "axios";
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL + '/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

const getUrl = (url) => `/${url}`;

export const api = {
    get: (url, config) => instance.get(getUrl(url), config),
    post: (url, data = {}, config) => instance.post(getUrl(url), data, config),
    put: (url, data = {}, config) => instance.put(getUrl(url), data, config),
    delete: (url, config) => instance.delete(getUrl(url), config)
};
export const serverUrl = process.env.REACT_APP_SERVER_URL + '/api';
export const imageServerUrl = process.env.REACT_APP_IMAGE_SERVER_URL;
