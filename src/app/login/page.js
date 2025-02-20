"use client"; // Tells Next.js this runs in the browser

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import supabase from '@/utils/supabase';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signIn() {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert('Login failed: ' + error.message);
    else alert('Logged in!');
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded">
      <h1 className="text-2xl text-gray-600 mb-4">Login</h1>
      <Input
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4"
      />
      <Input
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4"
      />
      <Button onClick={signIn} className="w-full bg-blue-500 text-white">
        Login
      </Button>
    </div>
  );
}