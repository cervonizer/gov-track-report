export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.17"
  }
  public: {
    Tables: {
      evidence_reviews: {
        Row: {
          decision: Database["public"]["Enums"]["verification_state"]
          evidence_id: string
          id: string
          rationale: string
          reviewed_at: string
          reviewer_id: string
          sequence: number
        }
        Insert: {
          decision: Database["public"]["Enums"]["verification_state"]
          evidence_id: string
          id?: string
          rationale: string
          reviewed_at?: string
          reviewer_id: string
          sequence?: never
        }
        Update: {
          decision?: Database["public"]["Enums"]["verification_state"]
          evidence_id?: string
          id?: string
          rationale?: string
          reviewed_at?: string
          reviewer_id?: string
          sequence?: never
        }
        Relationships: [
          {
            foreignKeyName: "evidence_reviews_evidence_id_fkey"
            columns: ["evidence_id"]
            isOneToOne: false
            referencedRelation: "promise_evidence"
            referencedColumns: ["id"]
          },
        ]
      }
      political_promises: {
        Row: {
          category: string
          created_at: string
          created_by: string | null
          date_uncertainty: string | null
          deadline: string | null
          description: string
          id: string
          legacy_assertion: Json | null
          legacy_key: string | null
          politician_id: string
          promised_on: string | null
          published: boolean
          title: string
        }
        Insert: {
          category?: string
          created_at?: string
          created_by?: string | null
          date_uncertainty?: string | null
          deadline?: string | null
          description?: string
          id?: string
          legacy_assertion?: Json | null
          legacy_key?: string | null
          politician_id: string
          promised_on?: string | null
          published?: boolean
          title: string
        }
        Update: {
          category?: string
          created_at?: string
          created_by?: string | null
          date_uncertainty?: string | null
          deadline?: string | null
          description?: string
          id?: string
          legacy_assertion?: Json | null
          legacy_key?: string | null
          politician_id?: string
          promised_on?: string | null
          published?: boolean
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "political_promises_politician_id_fkey"
            columns: ["politician_id"]
            isOneToOne: false
            referencedRelation: "politicians"
            referencedColumns: ["id"]
          },
        ]
      }
      politicians: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      promise_assessments: {
        Row: {
          created_at: string
          criteria: string
          evidence_ids: string[]
          fulfillment_percent: number | null
          id: string
          methodology: string
          promise_id: string
          rationale: string
          reviewed_at: string | null
          reviewer_id: string | null
          status: Database["public"]["Enums"]["promise_status"]
          submitted_by: string
          supersedes: string | null
          verification: Database["public"]["Enums"]["verification_state"]
          version: number
        }
        Insert: {
          created_at?: string
          criteria: string
          evidence_ids?: string[]
          fulfillment_percent?: number | null
          id?: string
          methodology: string
          promise_id: string
          rationale: string
          reviewed_at?: string | null
          reviewer_id?: string | null
          status: Database["public"]["Enums"]["promise_status"]
          submitted_by: string
          supersedes?: string | null
          verification?: Database["public"]["Enums"]["verification_state"]
          version: number
        }
        Update: {
          created_at?: string
          criteria?: string
          evidence_ids?: string[]
          fulfillment_percent?: number | null
          id?: string
          methodology?: string
          promise_id?: string
          rationale?: string
          reviewed_at?: string | null
          reviewer_id?: string | null
          status?: Database["public"]["Enums"]["promise_status"]
          submitted_by?: string
          supersedes?: string | null
          verification?: Database["public"]["Enums"]["verification_state"]
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "promise_assessments_promise_id_fkey"
            columns: ["promise_id"]
            isOneToOne: false
            referencedRelation: "political_promises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "promise_assessments_supersedes_fkey"
            columns: ["supersedes"]
            isOneToOne: false
            referencedRelation: "promise_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      promise_evidence: {
        Row: {
          accessed_on: string | null
          description: string
          id: string
          promise_id: string
          provenance: Database["public"]["Enums"]["source_provenance"]
          published_on: string | null
          publisher: string | null
          quotation: string | null
          submitted_at: string
          submitted_by: string
          timestamp_end: number | null
          timestamp_start: number | null
          title: string | null
          url: string
        }
        Insert: {
          accessed_on?: string | null
          description: string
          id?: string
          promise_id: string
          provenance?: Database["public"]["Enums"]["source_provenance"]
          published_on?: string | null
          publisher?: string | null
          quotation?: string | null
          submitted_at?: string
          submitted_by: string
          timestamp_end?: number | null
          timestamp_start?: number | null
          title?: string | null
          url: string
        }
        Update: {
          accessed_on?: string | null
          description?: string
          id?: string
          promise_id?: string
          provenance?: Database["public"]["Enums"]["source_provenance"]
          published_on?: string | null
          publisher?: string | null
          quotation?: string | null
          submitted_at?: string
          submitted_by?: string
          timestamp_end?: number | null
          timestamp_start?: number | null
          title?: string | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "promise_evidence_promise_id_fkey"
            columns: ["promise_id"]
            isOneToOne: false
            referencedRelation: "political_promises"
            referencedColumns: ["id"]
          },
        ]
      }
      promise_sources: {
        Row: {
          accessed_on: string | null
          id: string
          promise_id: string
          provenance: Database["public"]["Enums"]["source_provenance"]
          published: boolean
          published_on: string | null
          publisher: string | null
          quotation: string | null
          timestamp_end: number | null
          timestamp_start: number | null
          title: string | null
          uncertainty: string | null
          url: string
        }
        Insert: {
          accessed_on?: string | null
          id?: string
          promise_id: string
          provenance?: Database["public"]["Enums"]["source_provenance"]
          published?: boolean
          published_on?: string | null
          publisher?: string | null
          quotation?: string | null
          timestamp_end?: number | null
          timestamp_start?: number | null
          title?: string | null
          uncertainty?: string | null
          url: string
        }
        Update: {
          accessed_on?: string | null
          id?: string
          promise_id?: string
          provenance?: Database["public"]["Enums"]["source_provenance"]
          published?: boolean
          published_on?: string | null
          publisher?: string | null
          quotation?: string | null
          timestamp_end?: number | null
          timestamp_start?: number | null
          title?: string | null
          uncertainty?: string | null
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "promise_sources_promise_id_fkey"
            columns: ["promise_id"]
            isOneToOne: false
            referencedRelation: "political_promises"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: string
          role: string
          user_id: string
        }
        Insert: {
          id?: string
          role: string
          user_id: string
        }
        Update: {
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      assessment_supported: { Args: { _id: string }; Returns: boolean }
      create_promise: { Args: { payload: Json }; Returns: string }
      evidence_is_public: { Args: { _id: string }; Returns: boolean }
      is_promise_reviewer: { Args: never; Returns: boolean }
      promise_catalog: { Args: never; Returns: Json }
      require_contributor: { Args: { reviewer?: boolean }; Returns: string }
      review_assessment: {
        Args: {
          assessment: string
          decision: Database["public"]["Enums"]["verification_state"]
          rationale: string
        }
        Returns: string
      }
      review_evidence: {
        Args: {
          decision: Database["public"]["Enums"]["verification_state"]
          evidence: string
          rationale: string
        }
        Returns: string
      }
      submit_assessment: { Args: { payload: Json }; Returns: string }
      submit_evidence: { Args: { payload: Json }; Returns: string }
      validate_assessment: {
        Args: {
          ids: string[]
          p: number
          pid: string
          s: Database["public"]["Enums"]["promise_status"]
        }
        Returns: undefined
      }
    }
    Enums: {
      promise_status:
        | "ainda não avaliável"
        | "em andamento"
        | "cumprida"
        | "parcialmente cumprida"
        | "não cumprida"
      source_provenance: "official" | "non_official" | "unknown"
      verification_state: "pending" | "approved" | "rejected"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      promise_status: [
        "ainda não avaliável",
        "em andamento",
        "cumprida",
        "parcialmente cumprida",
        "não cumprida",
      ],
      source_provenance: ["official", "non_official", "unknown"],
      verification_state: ["pending", "approved", "rejected"],
    },
  },
} as const
