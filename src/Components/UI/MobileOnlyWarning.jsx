import { Smartphone } from "lucide-react";

export default function MobileOnlyWarning() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full space-y-6">
        <div className="flex justify-center">
          <div className="bg-blue-100 p-4 rounded-full">
            <Smartphone className="size-12 text-blue-600" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-gray-900">
            Mobile Experience Only
          </h1>
          <p className="text-gray-600">
            UniTrade is designed exclusively for mobile devices. Please access
            this application on your phone for the best experience.
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-400">
            Resize your browser window to mobile width to test.
          </p>
        </div>
      </div>
    </div>
  );
}
