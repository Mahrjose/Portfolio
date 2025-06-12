import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  gradient: string;
  delay?: number;
}

const StatCard = ({ title, value, subtitle, icon: Icon, gradient, delay = 0 }: StatCardProps) => {
  return (
      <div 
        className={`relative overflow-hidden rounded-2xl ${gradient} p-4 sm:p-6 text-white group duration-500 ease-out shadow-lg flex flex-col`}
        style={{ animationDelay: `${delay}ms`, minHeight: '120px' }}
      >
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 sm:p-3 bg-white/20 rounded-xl backdrop-blur-sm">
            <Icon className="w-3 h-3 sm:w-6 sm:h-6" />
          </div>
          <div className="text-right">
            <div className="text-xl sm:text-3xl font-bold">
              {value}
            </div>
            {subtitle && (
              <div className="text-sm opacity-80">
                {subtitle}
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium opacity-90 uppercase tracking-wider">
          {title}
        </h3>

        <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white/40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
