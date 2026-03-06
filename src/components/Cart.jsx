import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
    const {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        updateQuantity,
        removeFromCart,
        cartTotal,
    } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
                onClick={() => setIsCartOpen(false)}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-[#1F1F1F] z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Cabeçalho */}
                <div className="flex items-center justify-between p-6 border-b border-[#1F1F1F]">
                    <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                        <ShoppingBag className="w-6 h-6 text-[#E8AD42]" />
                        Carrinho
                    </h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-2 hover:bg-[#1a1a1a] rounded-full transition-colors text-[#888888] hover:text-white"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Lista de Produtos */}
                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                    {cartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-[#888888] space-y-4">
                            <ShoppingBag className="w-16 h-16 opacity-20" />
                            <p className="text-lg">Seu carrinho está vazio.</p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="text-[#E8AD42] hover:text-white font-bold uppercase tracking-wide underline opacity-80 hover:opacity-100 transition-opacity"
                            >
                                Continuar comprando
                            </button>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-4 p-4 bg-[#111] rounded-2xl border border-[#1F1F1F] items-center"
                            >
                                <div className="w-20 h-20 bg-[#1a1a1a] rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold uppercase tracking-wide truncate">
                                        {item.title}
                                    </h3>
                                    <div className="text-[#E8AD42] font-black">{item.price}</div>
                                    <div className="flex items-center gap-4 mt-3">
                                        <div className="flex items-center bg-[#050505] rounded-full border border-[#1F1F1F] px-1 py-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-7 h-7 flex items-center justify-center text-[#888888] hover:text-white rounded-full hover:bg-[#1F1F1F] transition-colors"
                                            >
                                                <Minus className="w-3.5 h-3.5" />
                                            </button>
                                            <span className="w-8 text-center text-sm font-bold">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-7 h-7 flex items-center justify-center text-[#888888] hover:text-white rounded-full hover:bg-[#1F1F1F] transition-colors"
                                            >
                                                <Plus className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-[#888888] hover:text-red-500 transition-colors p-2 rounded-full hover:bg-[#1a1a1a]"
                                            title="Remover"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Rodapé / Checkout */}
                {cartItems.length > 0 && (
                    <div className="p-6 border-t border-[#1F1F1F] bg-[#0a0a0a]">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-[#888888] uppercase tracking-wide font-bold">
                                Subtotal
                            </span>
                            <span className="text-3xl font-black">R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
                        </div>
                        <button className="w-full bg-[#E8AD42] hover:bg-white text-black font-black uppercase tracking-widest py-4 rounded-full transition-colors flex items-center justify-center gap-2">
                            Finalizar Compra
                        </button>
                        <p className="text-center text-xs text-[#888888] mt-4 uppercase tracking-wider">
                            Frete Grátis Incluído
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}
