import React, { useState } from 'react'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    return (
        <div className='min-h-screen flex bg-zinc-900 items-center justify-center p-6 text-gray-900'>
            <div className="bg-white p-10 rounded-2xl shadow-2xl border border-zinc-800 w-full max-w-md">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-bold  mb-2">
                        {isLogin ? "Sign In" : "Create Account"}
                    </h1>
                    <p className="text-gray-500 text-sm">
                        {isLogin ? "Welcome back to Tarmeya." : "Register to start shopping."}
                    </p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Full Name</label>
                            <input
                                type="text"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                placeholder="John Doe"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white outline-none transition-all text-sm"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 ml-1">Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="email@example.com"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white outline-none transition-all text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 ml-1">Password</label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            placeholder="••••••••"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-gray-900 focus:bg-white outline-none transition-all text-sm"
                        />
                    </div>

                    <button type="submit" className="w-full bg-gray-900 text-white font-bold py-3.5 rounded-xl hover:bg-gray-800 transition shadow-lg shadow-gray-200 mt-2">
                        {isLogin ? "Continue" : "Sign Up"}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-sm text-gray-600 hover:text-gray-900 font-medium"
                    >
                        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
