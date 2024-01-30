import React from 'react';

export default function Loading() {
    return (
        <div className="p-5 duration-300 transform bg-gradient-to-r from-indigo-50 border rounded shadow-sm shadow- hover:-translate-y-2">
            <div className="animate-pulse">
                <div className="flex items-center justify-center sm:w-12 w-10 sm:h-12 h-10 mb-4 rounded-full bg-slate-400">
                </div>
                <div className="space-y-4">
                    <div className="h-3 bg-slate-400 rounded-lg">
                    </div>
                    <div className="h-3 bg-slate-400 rounded-lg">
                    </div>
                    <div className="h-3 bg-slate-400 rounded-lg">
                    </div>
                    <div className="h-3 bg-slate-400 rounded-lg">
                    </div>
                </div>
            </div>
        </div>
    );
}