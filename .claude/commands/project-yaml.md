---
allowed-tools: Task, Read, Write
description: Generate AI-optimized project YAML documentation using specialized analysis agents
argument-hint: [output-path] - Optional path for the generated YAML file (defaults to .context-kit/_context-kit.yml)
---

# Project YAML Generator

Generate comprehensive AI-optimized project documentation using specialized analysis agents.

## Description
This command orchestrates multiple specialized agents to analyze the current project and generate a highly compressed YAML file optimized for AI agent consumption. The output follows the Repo-Context Format v1.0 specification for maximum utility with minimum token usage (40-60% token reduction). Additionally, it updates the persistent Claude Code context in `./claude.local.md` (project root) to ensure future sessions have current project information.

## Usage
`/project-yaml [output-path]`

## Variables
- $ARGUMENTS: Optional output path for the generated YAML file
- OUTPUT_PATH: Where the YAML file is saved (default: .context-kit/_context-kit.yml)

## Steps

### Phase 1: Analysis Execution
1. **Run Core Analysis Agents in Parallel**:
   - Execute `docs-context7` agent to map dependencies to Context7 documentation IDs
   - Execute `dir-mapper` agent to generate comprehensive project structure map
   - Execute `design-system` agent to extract UI components and design tokens
   - All three agents run concurrently for optimal performance

### Phase 2: Synthesis
2. **Consolidate Findings**:
   - Execute `project-yaml-builder` agent to synthesize all analysis outputs
   - Apply compression techniques and YAML optimization
   - Generate final AI-optimized project configuration
   - Update persistent Claude Code context in `./claude.local.md` (project root)

### Phase 3: Validation
3. **Verify Output**:
   - Confirm YAML syntax validity
   - Verify all agent outputs were processed

## Examples

### Example 1: Basic usage
```bash
/project-yaml
```
Generates `.context-kit/_context-kit.yml` with comprehensive project analysis.

### Example 2: Custom output path
```bash
/project-yaml /path/to/custom/project-config.yml
```
Saves the generated YAML to a custom location.

### Example 3: Re-analysis after changes
```bash
/project-yaml
```
Updates existing project YAML with latest codebase analysis.

## Agent Execution Strategy

**Parallel Execution** (analysis agents are independent and can run concurrently):
```bash
# Phase 1: Independent analysis agents (run in parallel)
# Single message with multiple Task tool calls for optimal performance
Task(docs-context7), Task(dir-mapper), Task(design-system)

# Phase 2: Synthesis agent (depends on Phase 1 outputs)
/agent project-yaml-builder
```

Each agent produces structured output files:
- `docs-context7-output.yml`: Dependency mapping
- `dir-structure-output.yml`: Project structure
- `design-system-output.yml`: UI specifications
- Final output: `.context-kit/_context-kit.yml`

## Expected Output

The generated YAML will include:

### Core Sections (Repo-Context Format v1.0)
- **meta**: Project metadata and format version (required)
- **deps**: Dependencies with Context7 documentation references
- **struct**: Directory structure with file counts and types using `_:` pattern
- **design**: Design system tokens and component specifications
- **arch**: Architecture patterns
- **ops**: Operations and workflows
- **semantic**: AI consumption hints (prefix with ~)

### YAML Optimization Features (40-60% token reduction)
- YAML 1.2 anchors (&name) and aliases (*name) with merge operator (<<: *name)
- Standard abbreviations: deps, struct, comp, props/p, desc, lang, imp, exp, a11y, cfg, env
- Compact array notation `[a, b, c]` for lists under 5 items
- Inline object notation `{key: val}` for simple key-value pairs
- Directory aggregates using `_: {n: count, t: {type: count}}` pattern
- Strategic omission of null/empty/default values
- Meaningful anchor names (e.g., &js-deps, &py, &colors)

## Output Structure
```
.context-kit/
├── _context-kit.yml              # Final AI-optimized configuration
└── analysis/                 # Agent analysis outputs
    ├── docs-context7-output.yml
    ├── dir-structure-output.yml
    └── design-system-output.yml
```

## Integration Points
- **Related Commands**: Works with `/security-review` for comprehensive analysis
- **Dependencies**: Requires MCP Context7 server for documentation mapping
- **Workflow Position**: Run after significant codebase changes or before AI agent sessions
- **Git Integration**: Uses git commands for structure analysis

## Best Practices
- Run after major dependency updates or structural changes
- Review agent outputs in `.context-kit/analysis/` for detailed findings
- Use generated YAML to prime AI agents with project context
- Validate YAML 1.2 syntax after generation
- Verify anchors resolve correctly in the output
- Target 40-60% token reduction while maintaining essential information

## Notes
- Requires active MCP Context7 server connection for dependency mapping
- Large projects may take 1-2 minutes for complete analysis (improved with parallel execution)
- Agent outputs are preserved for debugging and manual review
- Output follows Repo-Context Format v1.0 specification
- YAML 1.2 compliant with optimized compression techniques
- Phase 1 agents run in parallel for optimal performance
- Achieves 40-60% token reduction through strategic compression

After generation, the command provides a summary of documented components and any notable project structure findings.