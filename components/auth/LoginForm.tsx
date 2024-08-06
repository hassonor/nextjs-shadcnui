'use client';

import * as z from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import {EyeIcon, EyeSlashIcon} from '@heroicons/react/24/solid'; // Updated import paths for Heroicons v2

const formSchema = z.object({
    email: z.string().min(1, {
        message: 'Email is required',
    }).email({
        message: 'Please enter a valid email',
    }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters',
    }),
});

const LoginForm = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        },
    });

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        router.push('/');
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                    Log into your account with your credentials
                </CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-6'>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
                                            placeholder='Enter Email'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                type={showPassword ? 'text' : 'password'}
                                                className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0 pr-10'
                                                placeholder='Enter Password'
                                                {...field}
                                            />
                                            <button
                                                type='button'
                                                className='absolute inset-y-0 right-0 flex items-center pr-3'
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? (
                                                    <EyeIcon className='h-5 w-5 text-gray-700 dark:text-gray-300'/>
                                                ) : (
                                                    <EyeSlashIcon className='h-5 w-5 text-gray-700 dark:text-gray-300'/>
                                                )}
                                            </button>
                                        </div>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button className='w-full'>Sign In</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default LoginForm;
