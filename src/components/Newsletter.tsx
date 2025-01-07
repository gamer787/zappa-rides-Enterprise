import { useState } from 'react';
import { Mail } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      await addDoc(collection(db, 'newsletter_subscribers'), {
        email,
        timestamp: serverTimestamp(),
        source: window.location.hostname,
      });
      
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error('Newsletter subscription error:', err);
      setStatus('error');
      setErrorMessage('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
      <p className="text-gray-400 mb-4">
        Subscribe to our newsletter for updates and insights.
      </p>
      
      {status === 'success' && (
        <div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-lg mb-4">
          Thanks for subscribing!
        </div>
      )}
      
      {status === 'error' && (
        <div className="bg-red-500/10 text-red-400 px-4 py-2 rounded-lg mb-4">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="flex-grow relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full bg-gray-800 px-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
}