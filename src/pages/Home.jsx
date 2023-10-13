import React, { useState } from 'react'
import "./index.css"
import Card from '../components/Card'
import MyPaginatin from '../components/MyPaginatin'


const api = [
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
    {
        title: "Matematika o'qituvchisi"
    },
]


const Home = () => {




  return (
    <div>
        <div className="popular-teachers">
            <div className="popular-teachers-title">Popular Teachers</div>
            <div className="populars-box">
            <div className="cards">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            </div>
        </div>
        <div className="teachers-list container">
            <div className="teachers-list-title">All teachers</div>
            <div className="teachers-box">
               <MyPaginatin api = {api}/>
            </div>
        </div>
        
        
    </div>
  )
}

export default Home