'use client'
import { useState, useEffect } from 'react'

export default function User() {
  const [name, setName] = useState('trangxinh')

  useEffect(() => {
    console.log('trang xinhtangclient hydrated');
    setName(window.navigator.userAgent); // Logic chỉ chạy ở client
  }, [])

  return <div id='trangnhe'>{name}</div>
}