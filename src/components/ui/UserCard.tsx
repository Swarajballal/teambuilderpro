import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { User } from '@/types';
import { UserPlus } from 'lucide-react';
import { Button } from './button';


interface UserCardProps {
    data: User;
}

const UserCard: React.FC<UserCardProps> = ({ data }) => {

    return (
        <Link to="/" className='outline-0 focus:ring-2 hover:ring-2 ring-primary transition
        duration-300 rounded-lg'>
            <Card className='rounded-lg border-2'>
                <CardContent className='pt-4'>
                    <div className='aspect-square relative bg-foreground/5 dark:bg-background rounded-lg'>
                        <img 
                            src={data.avatar}
                            alt=""
                            className='aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105'
                        />
                            {data.available ? (<Button
                            variant="ghost"
                            size="icon"
                            className='mr-2 bg-primary/25 absolute top-0 right-0 '
                            aria-label='Add to team'
                             >
                            <UserPlus className='h-6 w-6 text-primary absolute top-1 right-1'/>
                            <span className='sr-only'>
                                Add User
                            </span>
                        </Button> ) : null}
                    </div>
                </CardContent>
                <CardFooter className='flex-col items-start'>
                    <div>
                        <div className='flex gap-4'>
                            <p className='font-semibold text-lg'>
                                {data.first_name} 
                            </p>
                            <p className='mt-1'>
                                {data.available ? (<TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='h-5 w-5 bg-lime-400 rounded-full'></div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                    <p>Available</p>
                                    </TooltipContent>
                                </Tooltip>
                                </TooltipProvider>) : (<TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                    <div className='h-5 w-5 bg-destructive rounded-full'></div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                    <p>Unavailable</p>
                                    </TooltipContent>
                                </Tooltip>
                                </TooltipProvider>)}
                            </p>
                        </div>
                        <p className='text-sm text-primary/80'>
                            {data.last_name}  
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        {data?.domain} {data.gender}
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default UserCard;