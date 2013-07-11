class Array

  def my_each(&eachblock)

    for i in 0...self.length
      eachblock.call(self[i])
    end

  end

  def my_map(&mapblock)
    new_arr = []
    self.my_each do |el|
      new_arr << mapblock.call(el)
    end
    new_arr
  end

  def my_select(&selectblock)
    selected_arr = []
    self.my_each do |el|
      selected_arr << el if selectblock.call(el)
    end
    selected_arr
  end

  def my_inject(&injectblock)
    arr = self.dup
    accumulator = arr[0]
    while arr.length > 1
      var1 = arr.pop
      var2 = arr.pop
      arr << injectblock.call(var1, var2)
    end
    arr[0]
  end

  def my_inject2(&block)
    array = self.dup
    accumulator = array.shift
    array.my_each do |element|
      accumulator = block.call(accumulator, element)
    end
    accumulator
  end

  def my_sort!(&block)
    sorted = false

    until sorted
      sorted = true
      index = 0
      self.my_each do |element|
        next if (index + 1) == self.length
        # if spaceship > 0
        if block.call(element, self[index + 1]) > 0
          self[index], self[index + 1] = self[index + 1], self[index]
          sorted = false
        end
        index += 1
      end
    end

    self
  end



end

# block.call(element, array[index]+1)

def <=> (x)
  y = self
  x
end


new_array = (5..10).to_a

new_array.my_select do |i|
  i % 2 == 0
end

# new_array.my_inject2 {|sum, n| sum + n}
#
# (5..10).to_a.my_inject2(:+)


