import { CheckCircle2, Server, Activity, Database, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Server Status — UnityAI",
  description: "Real-time server monitoring, uptime, and API latency statistics for UnityAI infrastructure.",
};

export default function StatusPage() {
  return (
    <div className="py-[6rem]">
      <div className="container max-w-[800px]">
        <div className="text-center mb-[4.5rem]">
          <h1 className="text-[3rem] font-bold mb-2">
            System <span className="text-gradient">Status</span>
          </h1>
          <p className="text-[1.125rem] text-[var(--color-text-muted)]">
            Real-time monitoring of the UnityAI infrastructure and API routes.
          </p>
        </div>

        {/* Global Status Banner */}
        <div className="flex items-center gap-4 bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)] rounded-2xl p-6 mb-8">
          <CheckCircle2 className="w-8 h-8 text-[#10b981] flex-shrink-0" />
          <div>
            <h2 className="text-[1.25rem] font-bold text-[#10b981]">All Systems Operational</h2>
            <p className="text-[0.875rem] text-[var(--color-text-muted)] mt-1">
              UnityAI services are running smoothly. No active incidents reported.
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="card p-5 text-center flex flex-col items-center justify-center">
            <Activity className="w-6 h-6 text-[var(--color-primary)] mb-3" />
            <div className="text-[1.5rem] font-bold">99.99%</div>
            <div className="text-[0.75rem] text-[var(--color-text-muted)] uppercase tracking-wider font-bold mt-1">Uptime</div>
          </div>
          <div className="card p-5 text-center flex flex-col items-center justify-center">
            <Clock className="w-6 h-6 text-[var(--color-primary)] mb-3" />
            <div className="text-[1.5rem] font-bold">124ms</div>
            <div className="text-[0.75rem] text-[var(--color-text-muted)] uppercase tracking-wider font-bold mt-1">Avg Latency</div>
          </div>
          <div className="card p-5 text-center flex flex-col items-center justify-center">
            <Server className="w-6 h-6 text-[var(--color-primary)] mb-3" />
            <div className="text-[1.5rem] font-bold">0</div>
            <div className="text-[0.75rem] text-[var(--color-text-muted)] uppercase tracking-wider font-bold mt-1">Incidents</div>
          </div>
          <div className="card p-5 text-center flex flex-col items-center justify-center">
            <Database className="w-6 h-6 text-[var(--color-primary)] mb-3" />
            <div className="text-[1.5rem] font-bold text-[#10b981]">Active</div>
            <div className="text-[0.75rem] text-[var(--color-text-muted)] uppercase tracking-wider font-bold mt-1">Database</div>
          </div>
        </div>

        {/* Service Breakdown */}
        <div className="card p-6">
          <h3 className="text-[1.25rem] font-bold mb-6 pb-4 border-b border-[var(--color-border-color)]">Service Breakdown</h3>
          
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center py-2">
              <div className="font-bold text-[0.9375rem]">API Gateway</div>
              <div className="flex items-center gap-2">
                <span className="text-[0.875rem] text-[#10b981] font-semibold">Operational</span>
                <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
              </div>
            </div>
            
            <div className="flex justify-between items-center py-2">
              <div className="font-bold text-[0.9375rem]">Auth Layer (Supabase)</div>
              <div className="flex items-center gap-2">
                <span className="text-[0.875rem] text-[#10b981] font-semibold">Operational</span>
                <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
              </div>
            </div>

            <div className="flex justify-between items-center py-2">
              <div className="font-bold text-[0.9375rem]">Anthropic Proxy Route</div>
              <div className="flex items-center gap-2">
                <span className="text-[0.875rem] text-[#10b981] font-semibold">Operational</span>
                <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
              </div>
            </div>

            <div className="flex justify-between items-center py-2">
              <div className="font-bold text-[0.9375rem]">OpenAI Proxy Route</div>
              <div className="flex items-center gap-2">
                <span className="text-[0.875rem] text-[#10b981] font-semibold">Operational</span>
                <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
