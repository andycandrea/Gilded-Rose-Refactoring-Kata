# frozen_string_literal: true

require 'delegate'

module Decorators
  # A null object providing a dummy implementation for an aging decorator
  class Null < SimpleDelegator
    alias item __getobj__

    def tick
    end
  end
end
