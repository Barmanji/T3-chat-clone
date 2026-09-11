interface AIModel {
  id: string;
  name: string;
  description: string;
  context_length: number;
  pricing: {
    prompt: string;
    completion: string;
    request: string;
  };
  architecture: {
    modality: string;
    tokenizer: string;
    input_modalities: string[];
    output_modalities: string[];
  };
  top_provider: {
    max_completion_tokens: number;
    is_moderated: boolean;
  };
}

interface AIModelsResponse {
  models: AIModel[];
}

interface ChatData {
  id: string;
  title: string;
  model: string;
  userId: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  messages: Array<{
    id: string;
    content: string;
    messageRole: "USER" | "ASSISTANT";
    model?: string;
    createdAt: string | Date;
  }>;
}

interface ServerActionResult {
  success: boolean;
  data?: ChatData | ChatData[];
  message?: string;
}
