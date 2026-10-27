import React from 'react';
import { AlertTriangle, RotateCcw, Home, Trash2 } from 'lucide-react';

export default class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('LexiFlow Runtime Crash caught by GlobalErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleResetStorage = () => {
    try {
      // Clear potentially corrupted local state
      localStorage.removeItem('lexiflow_v4_stats');
      localStorage.removeItem('lexiflow_vocab_progress_v2');
      localStorage.removeItem('lexiflow_starred_words');
    } catch {}
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-screen bg-[#0B0F17] text-white flex items-center justify-center p-4 font-sans select-none">
          <div className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-[#131B2E] border border-rose-500/40 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 text-3xl shadow-lg">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/30">
                Khôi phục an toàn
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-white">
                Đã xảy ra sự cố hiển thị
              </h1>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hệ thống LexiFlow đã kích hoạt cơ chế bảo vệ tự động để tránh mất dữ liệu học tập của bạn.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3.5 rounded-2xl bg-[#0B0F17] border border-slate-800 text-left text-[11px] font-mono text-rose-300 max-h-32 overflow-y-auto">
                {this.state.error.toString()}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReload}
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg transition"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Tải lại trang</span>
              </button>

              <button
                onClick={this.handleResetStorage}
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition"
                title="Xóa cache bị lỗi và làm mới"
              >
                <Trash2 className="w-4 h-4 text-rose-400" />
                <span>Xóa cache & Khôi phục</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
