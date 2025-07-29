import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const TodoForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const createTodo = async (data) => {
    setIsLoading(true);
    setSubmitMessage("");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/createTodo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: data.title,
            description: data.description
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to create todo");
      }

      // Check if the response indicates success
      if (result.success) {
        setSubmitMessage("Todo created successfully!");
        reset(); // Clear the form
        
        // Navigate back to the todo list after a short delay
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        throw new Error(result.message || "Failed to create todo");
      }

    } catch (err) {
      console.error("Error creating todo:", err);
      setSubmitMessage(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit(createTodo)} className="space-y-6">
        {/* Success/Error Message */}
        {submitMessage && (
          <div className={`p-4 rounded-lg ${
            submitMessage.includes("Error") 
              ? "bg-red-50 border border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400" 
              : "bg-green-50 border border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400"
          }`}>
            {submitMessage}
          </div>
        )}

        {/* Title Field */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2"
          >
            Todo Title *
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter a descriptive title for your todo"
            {...register("title", { 
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters long"
              },
              maxLength: {
                value: 100,
                message: "Title must be less than 100 characters"
              }
            })}
            className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
              errors.title 
                ? "border-red-300 focus:border-red-500 focus:ring-red-500" 
                : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            } bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50`}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Description Field */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2"
          >
            Todo Description *
          </label>
          <textarea
            id="description"
            placeholder="Provide detailed description of what needs to be done..."
            {...register("description", { 
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Description must be at least 10 characters long"
              },
              maxLength: {
                value: 500,
                message: "Description must be less than 500 characters"
              }
            })}
            rows={4}
            className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none ${
              errors.description 
                ? "border-red-300 focus:border-red-500 focus:ring-red-500" 
                : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            } bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50`}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-base font-semibold text-white transition-all duration-200 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5"
            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Todo...
              </>
            ) : (
              <>
                Create Todo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="ml-2 h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;