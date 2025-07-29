import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, ListTodo } from "lucide-react";
import TodoForm from "../components/TodoForm";

const CreateTodoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-bold transition-colors duration-200 group"
              >
                <ArrowLeft size={25} className="group-hover:-translate-x-1 transition-transform duration-200" />
                Back to Todo List
              </Link>
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Create New Todo
              </h1>
              <p className="text-sm text-gray-600">Add a new task to stay organized</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Illustration/Info */}
          <div className="flex items-center justify-center lg:items-start">
            <div className="w-full max-w-lg">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-6 hidden md:block">
                <div className="text-center">
                  {/* Icon */}
                  <div className="mx-auto w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <ListTodo className="text-3xl text-white" size={32} />
                  </div>
                  
                  {/* Heading */}
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Stay Organized with Your Todos
                  </h2>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Create detailed tasks to keep track of your goals and stay productive. 
                    Organize your thoughts and turn them into actionable items.
                  </p>

                  {/* Feature highlights */}
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 font-medium">Easy task creation and management</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 font-medium">Detailed descriptions for clarity</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 font-medium">Track progress and completion</span>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="flex items-start justify-center lg:items-center">
            <div className="w-full max-w-md">
              {/* Form Container */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Add New Todo
                  </h2>
                  <p className="text-gray-600">
                    Fill in the details below to create your new task
                  </p>
                </div>

                <TodoForm />
              </div>

              {/* Bottom Tips */}
              <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-100">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">💡 Pro Tips:</h4>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• Use clear, actionable titles</li>
                  <li>• Include specific details in descriptions</li>
                  <li>• Break large tasks into smaller ones</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration matching HomePage */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
    </div>
  );
};

export default CreateTodoPage;