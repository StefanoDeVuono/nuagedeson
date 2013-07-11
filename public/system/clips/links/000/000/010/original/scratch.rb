class Array
  def bsearch(target)
    return nil if self.empty?
    halfway = length / 2
    left = self[0...halfway]
    right = self[halfway..-1]
    case self[halfway] <=> target
    when 0
      return target
    when 1
      left.bsearch(target)
    when -1
      rightside = right.bsearch(target)
      rightside.nil? ? nil : (halfway + rightside.length)
    end
  end
end