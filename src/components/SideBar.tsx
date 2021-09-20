
import { useState } from 'react';
import { Button } from './Button';
interface Genre {
  id: number;
  title: string;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
}

interface SideBarProps {
  selectedGenre: number;
  genres: Genre[];
  handleClickButton: (id: number) => void;
}

export function SideBar(props: SideBarProps) {
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {props.genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => props.handleClickButton(genre.id)}
          selected={props.selectedGenre === genre.id}
        />
      ))}
    </div>

  </nav>
  )
}