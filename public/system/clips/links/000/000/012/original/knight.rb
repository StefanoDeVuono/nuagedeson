class TreeNode

  attr_reader :kids
  attr_accessor :parent, :value

  def initialize
    @kids = []
  end

  def add_child(node)
    @kids << node
    node.parent = self
  end

  def info
    puts "This is the node #{self.inspect}"
    puts "This is the node's left child #{@left}"
    puts "This is the node's right child #{@right}"
    puts "This is the node's parent #{@parent}"
    puts "This is the node's value #{@value}"
  end

  def dfs(value)
    if @value == value
      return self
    else
      @kids.each do |kid|
        kid_search_val = kid.dfs(value)
        return kid_search_val if kid_search_val
      end
    end
    nil
  end

  def bfs(value)
    search_array = [self]
    until search_array.empty?
      current = search_array.shift
      return current if current.value == value
      current.kids.each do |kid|
        search_array << kid
      end
    end
    nil
  end


  def dfs_block(&block)
    if block.call(@value)
      return self
    else
      @kids.each do |kid|
        kid_search_val = kid.dfs_block(&block)
        return kid_search_val if kid_search_val
      end
    end
    nil
  end

  def dfs_block2(value = nil, &block)
    if value && @value == value
      return self
    elsif block_given? && block.call(@value)
      return true
    else
      @kids.each do |kid|
        kid_search_val = kid.dfs_block2(value, &block)
        return kid_search_val if kid_search_val
      end
    end
    false
  end


end


class Knightnode < TreeNode

  attr_reader :value

  @@previous_moves = []

  def initialize(coordinates)
    @kids = []
    @value = coordinates
    @@previous_moves << coordinates
  end

  def get_previous_moves
    @@previous_moves
  end

  def possible_moves(coordinates)
     # a coordinate like 4,4
    possible_moves = []

    theoretical_moves = [[2,1], [2,-1], [-2,1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]]

    until theoretical_moves.empty?
      candidate = add_arrays [theoretical_moves.shift, coordinates]
      if candidate[0].between?(0, 7) && candidate[1].between?(0, 7)
        possible_moves << candidate
      end
    end

    possible_moves
  end

  def add_arrays(arr)
    # takes a big meta-array, adds the contents of the sub-arrays
    arr.transpose.map { |x| x.reduce(:+) }
  end

  def move_tree
    next_moves = possible_moves @value
    next_moves.each do |move|
      if !@@previous_moves.include? move
        next_move = Knightnode.new(move)
        self.add_child next_move
      end
    end
    nil
  end


  def bfs(value)
    search_array = [self]
    until search_array.empty?
      current = search_array.shift
      return current if current.value == value
      current.kids.each do |kid|
        search_array << kid
      end
    end
    nil
  end

  def self.knight_path(start, finish)
    start_node = Knightnode.new(start) #unless @@previous_moves.include? start
    start_node.move_tree
    next_moves = [start_node]
    until next_moves.empty?
      current = next_moves.shift
      return current if current.value == finish
      current.kids.each do |kid|
        next_moves << kid
        @@previous_moves << kid
      end
    end
    nil
  end

end

