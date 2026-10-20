# Architecture
- Store political promises, source provenance, evidence and immutable assessment versions in PostgreSQL; public RLS exposes only published material, so client and MCP reads share the same trust boundary.
- Keep legacy assertions as audit-only records, never as approved assessments; deadline elapsed time and evidence-based fulfillment are independent dimensions.
- Assign reviewer access only through privileged administration of user_roles; no client or signup metadata may grant a role.
- Use civil ISO dates and UTC day ordinals for calendar arithmetic to avoid timezone shifts.