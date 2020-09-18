//Java Solution

class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) {
            return result;
        }
        
        LinkedList<Pair<TreeNode, Integer>> stack = new LinkedList<>();
        stack.add(new Pair(root, 0));
        
        while (!stack.isEmpty()) {
            Pair<TreeNode, Integer> curr = stack.poll();
            TreeNode node = curr.getKey();
            int level = curr.getValue();
            
            if (result.size() <= level) {
                result.add(new ArrayList<>());
            }
            
            if (level % 2 == 0) {
                result.get(level).add(node.val);    
            } else {
                result.get(level).add(0, node.val);
            }
            
            if (node.left != null) {
                stack.add(new Pair(node.left, level + 1));
            }
            
            if (node.right != null) {
                stack.add(new Pair(node.right, level + 1));
            }
        }
        
        return result;
    }
}