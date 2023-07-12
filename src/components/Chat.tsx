'use client';

import { useChat } from 'ai/react';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './ui/card';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

export const Chat = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
    });

    return (
        <Card className='w-[600px]'>
            <CardHeader>
                <CardTitle>Chat AI</CardTitle>

                <CardDescription>
                    Using Vercel SDK to create a chat bot.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <ScrollArea className='h-[600px] w-full pr-4'>
                    {messages.map((message) => {
                        return (
                            <div
                                key={message.id}
                                className='flex gap-3 text-slate-600 text-sm mb-4'
                            >
                                {message.role === 'user' && (
                                    <Avatar>
                                        <AvatarFallback>ND</AvatarFallback>

                                        <AvatarImage src='https://github.com/neanderdev.png' />
                                    </Avatar>
                                )}

                                {message.role === 'assistant' && (
                                    <Avatar>
                                        <AvatarFallback>AI</AvatarFallback>

                                        <AvatarImage src='https://images.unsplash.com/photo-1593377201811-4516986cbe41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80' />
                                    </Avatar>
                                )}

                                <p className='leading-relaxed'>
                                    <span className='block font-bold text-slate-700'>
                                        {message.role === 'user' ? 'Usuário' : 'AI'}
                                    </span>

                                    {message.content}
                                </p>
                            </div>
                        );
                    })}
                </ScrollArea>
            </CardContent>

            <CardFooter>
                <form className='flex flex-1 space-x-2' onSubmit={handleSubmit}>
                    <Input
                        placeholder='How can I help you?'
                        value={input}
                        onChange={handleInputChange}
                    />

                    <Button type='submit'>Send</Button>
                </form>
            </CardFooter>
        </Card>
    );
};