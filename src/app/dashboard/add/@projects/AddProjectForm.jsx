'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { addProjectAction } from '@/app/actions/projectActions';
import { RemoveIcon, UploadIcon } from '../../ui/Icons';

export default function AddProjectForm({ categories }) {
  const [images, setImages] = useState([]);
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => {
      return {
        file,
        preview: URL.createObjectURL(file),
        progress: 0,
      };
    });
    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <form
      action={addProjectAction}
      className="mt-8 space-y-4 max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg"
      noValidate
    >
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm border border-gray-300 focus:ring-2 focus:ring-main focus:outline-none"
        required
        aria-label="Fundraiser Title"
      />
      <textarea
        name="description"
        placeholder="Description"
        rows="4"
        className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 border border-gray-300 focus:ring-2 focus:ring-main focus:outline-none"
        required
        aria-label="Fundraiser Description"
      />

      <div className="space-y-2">
        <label htmlFor="category" className="block text-sm text-gray-600">
          Category
        </label>
        <div className="flex flex-col space-y-2">
          <select
            name="category"
            className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm border border-gray-300 focus:ring-2 focus:ring-main focus:outline-none"
            aria-label="Choose Category"
            onChange={(e) => setShowNewCategoryInput(e.target.value === '')}
            defaultValue="select"
          >
            <option value="select" disabled>
              Select a category
            </option>
            {categories?.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
            <option value="">New category</option>
          </select>

          {showNewCategoryInput && (
            <input
              type="text"
              name="newCategory"
              placeholder="Enter new category"
              className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm border border-gray-300 focus:ring-2 focus:ring-main focus:outline-none mt-2"
              aria-label="New Category"
            />
          )}
        </div>
      </div>

      <input
        type="number"
        name="raised"
        placeholder="Amount Raised ($)"
        className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm border border-gray-300 focus:ring-2 focus:ring-main focus:outline-none"
        required
        aria-label="Amount Raised"
      />
      <input
        type="number"
        name="goal"
        placeholder="Goal Amount ($)"
        className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm border border-gray-300 focus:ring-2 focus:ring-main focus:outline-none"
        required
        aria-label="Fundraising Goal"
      />

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-100">
        <input
          type="file"
          name="image"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex flex-col items-center justify-center text-gray-600 text-sm font-medium"
        >
          <UploadIcon />
          <span>Drop files here</span>
          <span className="text-gray-500 text-xs">or</span>
          <span className="text-main font-semibold">Browse</span>
        </label>
      </div>

      {images.length > 0 && (
        <div className="grid gap-2 grid-cols-3 mt-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative border rounded-lg p-2 bg-white h-28 overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.preview}
                  alt="preview"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full"
              >
                <RemoveIcon />
              </button>
            </div>
          ))}
        </div>
      )}

      <motion.button
        type="submit"
        className="text-white bg-main hover:bg-main-lighter tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6 disabled:bg-gray-400"
        whileTap={{ scale: 0.95 }}
      >
        Submit
      </motion.button>
    </form>
  );
}
