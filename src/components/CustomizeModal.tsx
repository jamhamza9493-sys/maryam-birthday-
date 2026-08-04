import React, { useState } from 'react';
import { X, Save, RefreshCw, Image, Music, Plus, Trash2, Heart } from 'lucide-react';
import { AppConfig, saveAppConfig, resetAppConfig, MemoryItem } from '../config';

interface CustomizeModalProps {
  config: AppConfig;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: AppConfig) => void;
}

export const CustomizeModal: React.FC<CustomizeModalProps> = ({
  config,
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<AppConfig>(config);
  const [activeTab, setActiveTab] = useState<'memories' | 'details' | 'letter'>('memories');

  if (!isOpen) return null;

  const handleRecipientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, recipientName: e.target.value });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, birthdayDate: e.target.value });
  };

  const handleMusicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, customMusicUrl: e.target.value });
  };

  const handleMemoryChange = (index: number, field: keyof MemoryItem, value: string) => {
    const updatedMemories = [...formData.memories];
    updatedMemories[index] = { ...updatedMemories[index], [field]: value };
    setFormData({ ...formData, memories: updatedMemories });
  };

  const handlePhotoUpload = (index: number, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        handleMemoryChange(index, 'photoUrl', e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    saveAppConfig(formData);
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    if (confirm("Reset memories and details back to default placeholders?")) {
      const def = resetAppConfig();
      setFormData(def);
      onSave(def);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-rose-500/30 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-200">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 flex justify-between items-center bg-slate-950/60">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500/30" />
            <h2 className="font-serif-display text-xl text-rose-100">
              Personalize Maryam's Surprise
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950/30 text-xs font-medium">
          <button
            onClick={() => setActiveTab('memories')}
            className={`flex-1 py-3 text-center transition-colors border-b-2 ${
              activeTab === 'memories'
                ? 'border-rose-500 text-rose-300 bg-rose-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Memories (Section 2)
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`flex-1 py-3 text-center transition-colors border-b-2 ${
              activeTab === 'details'
                ? 'border-rose-500 text-rose-300 bg-rose-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Names & Music
          </button>
          <button
            onClick={() => setActiveTab('letter')}
            className={`flex-1 py-3 text-center transition-colors border-b-2 ${
              activeTab === 'letter'
                ? 'border-rose-500 text-rose-300 bg-rose-500/10'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Letter Content
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-xs">
          {activeTab === 'memories' && (
            <div className="space-y-6">
              <p className="text-slate-400 italic">
                Replace placeholders with your real memories and upload optional photographs for Maryam.
              </p>
              {formData.memories.map((mem, index) => (
                <div key={mem.id} className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 space-y-3">
                  <div className="flex justify-between items-center text-rose-400 font-semibold text-sm">
                    <span>Memory {mem.number}</span>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Title</label>
                    <input
                      type="text"
                      value={mem.title}
                      onChange={(e) => handleMemoryChange(index, 'title', e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Story / Description</label>
                    <textarea
                      rows={3}
                      value={mem.description}
                      onChange={(e) => handleMemoryChange(index, 'description', e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Photo (Optional)</label>
                    <div className="flex items-center gap-3">
                      {mem.photoUrl ? (
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-rose-500/40">
                          <img src={mem.photoUrl} alt="Memory preview" className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => handleMemoryChange(index, 'photoUrl', '')}
                            className="absolute top-0 right-0 bg-red-600 text-white p-0.5 rounded-bl"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex-1">
                          <label className="flex items-center justify-center gap-2 bg-slate-900 border border-dashed border-slate-700 hover:border-rose-500 rounded-lg p-3 cursor-pointer text-slate-400 hover:text-slate-200 transition-colors">
                            <Image className="w-4 h-4 text-rose-400" />
                            <span>Upload Photograph</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                  handlePhotoUpload(index, e.target.files[0]);
                                }
                              }}
                            />
                          </label>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'details' && (
            <div className="space-y-4">
              <div>
                <label className="block text-slate-400 mb-1">Recipient Name</label>
                <input
                  type="text"
                  value={formData.recipientName}
                  onChange={handleRecipientChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Birthday Date</label>
                <input
                  type="text"
                  value={formData.birthdayDate}
                  onChange={handleDateChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Custom Background Music MP3 URL (Optional)</label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder="https://example.com/song.mp3"
                    value={formData.customMusicUrl || ''}
                    onChange={handleMusicChange}
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-rose-500"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Leave empty to use the built-in romantic ambient piano synthesizer.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'letter' && (
            <div className="space-y-3">
              <label className="block text-slate-400 mb-1">Personal Handwritten Letter Text</label>
              <textarea
                rows={12}
                value={formData.letterText}
                onChange={(e) => setFormData({ ...formData, letterText: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-rose-500 font-sans-clean leading-relaxed"
              />
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex justify-between items-center">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-2 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Default</span>
          </button>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-1.5 px-5 py-2 bg-rose-600 hover:bg-rose-500 text-white font-medium rounded-xl transition-colors shadow-lg shadow-rose-950/40"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
