import { Edit2, Trash2, User, Calendar } from 'lucide-react';

const BookCard = ({ book, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            {book.title}
          </h3>
          <div className="flex items-center text-gray-600 mb-2">
            <User className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="text-sm truncate">{book.author}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="text-sm">{book.year}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(book)}
            className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
          >
            <Edit2 className="w-4 h-4" />
            Edit
          </button>
          <button
            onClick={() => onDelete(book.id)}
            className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;