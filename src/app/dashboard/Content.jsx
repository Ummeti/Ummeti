import React from 'react';
import AddProjectForm from './AddProjectForm';
import Items from './Items';

export default function Content() {
  return (
    <div className="p-8">
      <AddProjectForm />
      <Items />
    </div>
  );
}
