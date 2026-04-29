import json, os

f = open(r'c:\Users\Mario\AppData\Roaming\Code\User\workspaceStorage\0f73ece1244bd6dfa4094a0867049aa5\GitHub.copilot-chat\transcripts\3d101516-6fde-45c4-979e-f5725b1f9849.jsonl', encoding='utf-8')
lines = f.readlines()
f.close()

assets = r'c:\Users\Mario\Downloads\123\case5\assets'

# chapter-cap1: from multi_replace at line 1752 (index 1751) - the final version
d = json.loads(lines[1751])
args = d.get('data',{}).get('arguments',{})
if isinstance(args, str): args = json.loads(args)
reps = args.get('replacements',[])
svg1 = None
for r in reps:
    if 'chapter-cap1' in r.get('filePath',''):
        svg1 = r.get('newString','')
        break

# chapter-cap2 through 6: from run_in_terminal at lines 1776,1781,1786,1791,1796 (indices 1775,1780,1785,1790,1795)
svgs = {1: svg1}
for idx, cap in zip([1775, 1780, 1785, 1790, 1795], [2, 3, 4, 5, 6]):
    d = json.loads(lines[idx])
    args = d.get('data',{}).get('arguments',{})
    if isinstance(args, str): args = json.loads(args)
    cmd = args.get('command','')
    # Extract SVG between @' and '@
    start = cmd.find("@'\n") + 3
    end = cmd.rfind("\n'@")
    svgs[cap] = cmd[start:end]

for cap, svg in svgs.items():
    path = os.path.join(assets, f'chapter-cap{cap}.svg')
    with open(path, 'w', encoding='utf-8') as wf:
        wf.write(svg)
    print(f'chapter-cap{cap}.svg written: {len(svg)} chars')

print('Done.')
