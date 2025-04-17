'use client';
import React, { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Define several captcha options with their questions and answers.
const captchaOptions = [
  { question: 'What is 1 + 1?', answer: '2' },
  { question: 'What is 2 + 3?', answer: '5' },
  { question: 'What is 4 - 1?', answer: '3' },
  { question: 'What is 3 * 2?', answer: '6' },
  { question: 'What is 10 / 2?', answer: '5' },
];

export default function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Select a random captcha challenge on component initialization.
  const [selectedCaptcha] = useState(() => {
    return captchaOptions[Math.floor(Math.random() * captchaOptions.length)];
  });

  // Create the form schema with custom captcha validation that uses the selected captcha answer.
  const formSchema = useMemo(() => {
    return z.object({
      name: z.string().min(2, {
        message: 'Name must be at least 2 characters.',
      }),
      email: z.string().email({
        message: 'Invalid email address.',
      }),
      message: z.string().min(10, {
        message: 'Message must be at least 10 characters.',
      }),
      captcha: z.string()
        .min(1, { message: 'Please enter the captcha.' })
        .refine(
          (val) => val.trim() === selectedCaptcha.answer,
          { message: 'Captcha answer is incorrect.' }
        ),
    });
  }, [selectedCaptcha]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      captcha: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmissionStatus('idle');
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        form.reset(); // Reset the form after successful submission
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }
  }

  return (
    <div>
      {/* Top Section with Background Image */}
      <div
        className="w-full h-[350px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://virtuart4d.com/IMG/BackgroundMenu-1.jpg')",
        }}
      ></div>

      <div className="container mx-auto py-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section (Hidden on Mobile) */}
          <div className="hidden md:flex justify-center items-center">
            <img
              src="https://virtuart4d.com/IMG/VirtuartContact.gif"
              alt="Contact Us"
              className="mx-auto w-full max-w-[394px] h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Form Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="virtuart@virtuart4d.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your project" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="captcha"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Captcha</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter the captcha" {...field} />
                      </FormControl>
                      <FormDescription>{selectedCaptcha.question}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="bg-[#007586] text-white hover:bg-[#00EDEB] transition-colors duration-300 w-full"
                  type="submit"
                  disabled={submissionStatus !== 'idle'}
                >
                  {submissionStatus === 'idle' ? 'Submit' : 'Submitting...'}
                </Button>
                {submissionStatus === 'success' && (
                  <p className="text-green-500">Message sent successfully!</p>
                )}
                {submissionStatus === 'error' && (
                  <p className="text-red-500">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
