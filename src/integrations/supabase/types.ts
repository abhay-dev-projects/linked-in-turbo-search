export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      _SkillToTemplate: {
        Row: {
          A: string
          B: string
        }
        Insert: {
          A: string
          B: string
        }
        Update: {
          A?: string
          B?: string
        }
        Relationships: [
          {
            foreignKeyName: "_SkillToTemplate_A_fkey"
            columns: ["A"]
            isOneToOne: false
            referencedRelation: "Skill"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_SkillToTemplate_B_fkey"
            columns: ["B"]
            isOneToOne: false
            referencedRelation: "Template"
            referencedColumns: ["id"]
          },
        ]
      }
      _StarredBy: {
        Row: {
          A: string
          B: string
        }
        Insert: {
          A: string
          B: string
        }
        Update: {
          A?: string
          B?: string
        }
        Relationships: [
          {
            foreignKeyName: "_StarredBy_A_fkey"
            columns: ["A"]
            isOneToOne: false
            referencedRelation: "Template"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_StarredBy_B_fkey"
            columns: ["B"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      GitRepo: {
        Row: {
          cloneUrl: string
          defaultBranch: string
          description: string | null
          forksCount: number
          htmlUrl: string
          id: number
          language: string | null
          license: string | null
          name: string
          ownerId: string
          size: number
          stargazersCount: number
          topics: string[] | null
          updatedAt: string
        }
        Insert: {
          cloneUrl: string
          defaultBranch: string
          description?: string | null
          forksCount: number
          htmlUrl: string
          id?: number
          language?: string | null
          license?: string | null
          name: string
          ownerId: string
          size: number
          stargazersCount: number
          topics?: string[] | null
          updatedAt: string
        }
        Update: {
          cloneUrl?: string
          defaultBranch?: string
          description?: string | null
          forksCount?: number
          htmlUrl?: string
          id?: number
          language?: string | null
          license?: string | null
          name?: string
          ownerId?: string
          size?: number
          stargazersCount?: number
          topics?: string[] | null
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "GitRepo_ownerId_fkey"
            columns: ["ownerId"]
            isOneToOne: false
            referencedRelation: "Owner"
            referencedColumns: ["login"]
          },
        ]
      }
      Owner: {
        Row: {
          avatarUrl: string
          id: number
          login: string
          profileUrl: string
        }
        Insert: {
          avatarUrl: string
          id?: number
          login: string
          profileUrl: string
        }
        Update: {
          avatarUrl?: string
          id?: number
          login?: string
          profileUrl?: string
        }
        Relationships: []
      }
      Skill: {
        Row: {
          createdAt: string
          id: string
          imageUrl: string | null
          name: string
          tagValue: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id: string
          imageUrl?: string | null
          name: string
          tagValue: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: string
          imageUrl?: string | null
          name?: string
          tagValue?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Template: {
        Row: {
          createdAt: string
          createdById: string
          description: string
          guidelines: string | null
          id: string
          name: string
          repoId: number | null
          starCount: number
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          createdById: string
          description: string
          guidelines?: string | null
          id: string
          name: string
          repoId?: number | null
          starCount?: number
          updatedAt: string
        }
        Update: {
          createdAt?: string
          createdById?: string
          description?: string
          guidelines?: string | null
          id?: string
          name?: string
          repoId?: number | null
          starCount?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Template_createdById_fkey"
            columns: ["createdById"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Template_repoId_fkey"
            columns: ["repoId"]
            isOneToOne: false
            referencedRelation: "GitRepo"
            referencedColumns: ["id"]
          },
        ]
      }
      User: {
        Row: {
          about: string | null
          avatar: string | null
          createdAt: string
          email: string | null
          id: string
          name: string
          updatedAt: string
          username: string | null
        }
        Insert: {
          about?: string | null
          avatar?: string | null
          createdAt?: string
          email?: string | null
          id: string
          name: string
          updatedAt: string
          username?: string | null
        }
        Update: {
          about?: string | null
          avatar?: string | null
          createdAt?: string
          email?: string | null
          id?: string
          name?: string
          updatedAt?: string
          username?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
