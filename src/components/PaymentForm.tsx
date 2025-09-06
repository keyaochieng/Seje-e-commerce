// file: src/components/PaymentForm.tsx
"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, Loader2 } from 'lucide-react';
import { CartItemsType, paymentFormSchema, PaymentFormInputs, ShippingFormInputs } from '@/types';

// This is our WhatsApp redirect function from before
const generateWhatsAppMessage = (order: any) => {
    const businessPhoneNumber = "254712345678"; // YOUR BUSINESS NUMBER
    const orderSummary = `Hello Seje Chili! 🔥\n\nI've just placed an order:\n*Order ID:* ${order.id}\n*Name:* ${order.customerName}\n*Total:* Ksh ${order.total.toLocaleString()}\n\nFull details: ${window.location.origin}/orders/${order.id}`;
    const encodedMessage = encodeURIComponent(orderSummary.trim());
    return `https://wa.me/${businessPhoneNumber}?text=${encodedMessage}`;
};

// Define the props the component will receive
interface PaymentFormProps {
  shippingDetails: ShippingFormInputs;
  cartItems: CartItemsType;
}

const PaymentForm = ({ shippingDetails, cartItems }: PaymentFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const handlePayment: SubmitHandler<PaymentFormInputs> = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      // 1. Call our backend API to initiate the STK Push
      const response = await fetch('/api/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mpesaPhoneNumber: data.mpesaPhone,
          cart: cartItems,
          customerDetails: shippingDetails,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Payment initiation failed. Please check the number and try again.');
      }
      
      // 2. On success, the backend returns the saved order details
      const savedOrder = result.order;

      // 3. Redirect the user to WhatsApp with their order summary
      const whatsappUrl = generateWhatsAppMessage(savedOrder);
      window.location.href = whatsappUrl;

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handlePayment)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="mpesaPhone">M-Pesa Phone Number</label>
        <input
          className="border-b border-gray-200 py-2 outline-none text-sm"
          type="tel"
          id="mpesaPhone"
          placeholder="e.g., 254712345678"
          {...register("mpesaPhone")}
        />
        {errors.mpesaPhone && (
          <p className="text-sm text-red-500">{errors.mpesaPhone.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Pay with M-Pesa
            <ArrowRight className="w-3 h-3" />
          </>
        )}
      </button>

      {error && <p className="text-sm text-red-500 mt-2 text-center">{error}</p>}
    </form>
  );
};

export default PaymentForm;