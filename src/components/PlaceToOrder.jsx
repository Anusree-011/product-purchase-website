import React, { useState } from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'

const PlaceToOrder = () => {
    const { items } = useSelector((state) => state.cart)
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shipping = subtotal > 100 ? 0 : 15
    const total = subtotal + shipping

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        phoneNumber: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Order Details:', { items, customer: formData, total })

        if (Object.values(formData).some(value => !value)) {
            alert('Please fill all the fields')
            return
        }

        alert('Order placed successfully! Thank you for shopping with Tarmeya.')
    }

    return (
        <div className="min-h-screen bg-[#FDFDFD]">
            <Navbar />
            <main className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Checkout Form */}
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 mb-8">Shipping Information</h1>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-zinc-900 focus:bg-white outline-none transition-all text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="email@example.com"
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-zinc-900 focus:bg-white outline-none transition-all text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 ml-1">Street Address</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    placeholder="123 Luxury Lane"
                                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-zinc-900 focus:bg-white outline-none transition-all text-sm"
                                />
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="col-span-1 md:col-span-2">
                                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 ml-1">City</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.city}
                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        placeholder="New York"
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-zinc-900 focus:bg-white outline-none transition-all text-sm"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 ml-1">State</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.state}
                                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                        placeholder="NY"
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-zinc-900 focus:bg-white outline-none transition-all text-sm"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 ml-1">Zip Code</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.zipCode}
                                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                                        placeholder="10001"
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-zinc-900 focus:bg-white outline-none transition-all text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 ml-1">Country</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.country}
                                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                        placeholder="United States"
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-zinc-900 focus:bg-white outline-none transition-all text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phoneNumber}
                                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-zinc-900 focus:bg-white outline-none transition-all text-sm"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-zinc-900 text-white font-bold py-4 rounded-2xl hover:bg-black transition shadow-xl shadow-zinc-200 mt-8 active:scale-[0.98]"
                            >
                                Place Order • ${total}
                            </button>
                        </form>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default PlaceToOrder
