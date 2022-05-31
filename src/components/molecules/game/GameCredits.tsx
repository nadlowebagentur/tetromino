import classNames from 'classnames';
import {FC} from 'react';
import {ClassNameProps} from '../../particles/particles.types';

export interface GameCredit {
    desc: string;
    title: string;
    url: string;
}

export interface GameCreditsProps {
    credits: Array<GameCredit>;
}

export const GameCredits: FC<GameCreditsProps & ClassNameProps> = ({
    credits,
    className
}) => {
    return (
        <div className={classNames(className, 'flex flex-col text-xs -mb-3')}>
            {credits.map(({title, desc}, indx) => (
                <div className="flex flex-col mb-3" key={indx}>
                    <div>{title}:</div>
                    <span className="text-primary">{desc}</span>
                </div>
            ))}
        </div>
    );
};
