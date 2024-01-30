import React from 'react';

export default function Loading() {
    return (
        <div className="p-5 duration-300 transform bg-gradient-to-r from-indigo-50 border rounded shadow-sm shadow- hover:-translate-y-2">
            <div class="animate-pulse">
                <div class="flex items-center justify-center sm:w-12 w-10 sm:h-12 h-10 mb-4 rounded-full bg-slate-400">
                </div>
                <div class="space-y-4">
                    <div class="h-3 bg-slate-400 rounded-lg">
                    </div>
                    <div class="h-3 bg-slate-400 rounded-lg">
                    </div>
                    <div class="h-3 bg-slate-400 rounded-lg">
                    </div>
                    <div class="h-3 bg-slate-400 rounded-lg">
                    </div>
                </div>
            </div>
        </div>
    );
}