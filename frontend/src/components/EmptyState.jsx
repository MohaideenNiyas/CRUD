import { BookOpen } from 'lucide-react';

const EmptyState = ({ onAddBook }) => (
  <div className="text-center py-12">
    <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
      <BookOpen className="w-12 h-12 text-gray-400" />
    </div>
    <h3 className="text-xl font-medium text-gray-900 mb-2">No books yet</h3>
    <p className="text-gray-500 mb-6 max-w-sm mx-auto">
      Start building your digital library by adding your first book to the collection
    </p>
    <button
      onClick={onAddBook}
      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
    >
      Add Your First Book
    </button>
  </div>
);

export default EmptyState;